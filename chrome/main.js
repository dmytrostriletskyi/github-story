(function() {
  "use strict";

  // GitHub uses pushState to implement page transitions without full page loads. 
  // The ready implementation was found by link below.
  // https://github.com/thieman/github-selfies/blob/master/chrome/selfie.js
  function inject(fn) {
    var script = document.createElement('script');
    var parent = document.documentElement;
    script.textContent = '('+ fn +')();';
    parent.appendChild(script);
    parent.removeChild(script);
  }

  inject(function() {
    var pushState = history.pushState;
    history.pushState = function on_pushState() {
      window.postMessage('githubStory:pageUpdated', '*');
      return pushState.apply(this, arguments);
    };
    var replaceState = history.replaceState;
    history.replaceState = function on_replaceState() {
      window.postMessage('githubStory:pageUpdated', '*');
      return replaceState.apply(this, arguments);
    };
  });

  var allowedPullRequestsPaths = [
    /github.com\/[\w\-]+\/[\w\-]+\/compare/,
    /github.com\/[\w\-]+\/[\w\-]+\/pull\/\d+/
  ];

  function any(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return true;
      }
    }
    return false;
  }

  function initGithubStory() {
    if (!any(allowedPullRequestsPaths, (path) => path.test(window.location.href))) {
      return;
    }
    new GithubStory().setupDescriptionTemplateTool();
  }

  window.addEventListener('message', function(event) {
    if (event.data === 'githubStory:pageUpdated') {
      initGithubStory();
    }
  });
  window.addEventListener('popstate', initGithubStory);
  initGithubStory();
  
})();
