function GithubStory() {

  this.constants = new Constants()

  this.pullRequestDescriptionIcon = this.constants.pullRequestDescriptionDomElement.find('#description-template');

  this.pullRequestDescriptionIcon.on('click', () => {

    if (this.constants.isExistingPullRequestUrl) {
      const headerDataChannelValue = document.getElementById('partial-discussion-header').getAttribute('data-channel');
      const [_, pullRequestId] = headerDataChannelValue.split(':');
      document.getElementById(`issue-${pullRequestId}-body`).value += this.constants.pullRequestDescriptionTemplate
    }

    if (this.constants.isComparePullRequestUrl) {
      document.getElementById('pull_request_body').value += this.constants.pullRequestDescriptionTemplate
    }

  });

  this.setupDescriptionTemplateTool = function() {
    let pageToolBars = $('.toolbar-commenting');
    let descriptionToolBar = pageToolBars[this.constants.markdownToolbarIndex];

    if (descriptionToolBar === undefined) {
      return;
    }

    let lastToolBarGroup = descriptionToolBar.children[this.constants.lastmMarkdownToolbarGroupIndex];
    this.constants.pullRequestDescriptionDomElement.appendTo(lastToolBarGroup)
  };

}
