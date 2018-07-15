const pullRequestDescriptionTemplate = `### Jira references
- Ticket (task) — 

### Description
Description text. 

![picture_name](picture_url)

### Implemented
—
—
—

### References
- [url_name](url)
- [url_name](url)
`

const isExistingPullRequestUrl = window.location.href.includes('pull'),
      isComparePullRequestUrl = window.location.href.includes('compare'),
      markdownToolbarIndex = 0,
      lastmMarkdownToolbarGroupIndex = 3;

class PullRequestDescriptionTool {

    get() {
        let pullRequestDescriptionTemplateMdHeader = document.createElement('md-header');
    
        pullRequestDescriptionTemplateMdHeader.setAttribute('tabindex', -1);
        pullRequestDescriptionTemplateMdHeader.setAttribute('class', 'toolbar-item tooltipped tooltipped-nw');
        pullRequestDescriptionTemplateMdHeader.setAttribute('aria-label', 'Paste description template');
        pullRequestDescriptionTemplateMdHeader.setAttribute('data-ga-click', 'Markdown Toolbar, click, description template');
        pullRequestDescriptionTemplateMdHeader.insertAdjacentHTML('beforeend', '<svg class="octicon" id="description-template" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"></path></svg>');
        
        return pullRequestDescriptionTemplateMdHeader;
    }

    put() {
        let pullRequestDescriptionTool = this.get();
        let pullRequestToolBar = document.body.getElementsByClassName('toolbar-commenting');
        pullRequestToolBar[markdownToolbarIndex].children[lastmMarkdownToolbarGroupIndex].prepend(pullRequestDescriptionTool);
    }
}

let pullRequestDescriptionTool = new PullRequestDescriptionTool();
pullRequestDescriptionTool.put();

function appendTemplateToPullRequestDescription() {
    let pullRequestTextArea = getPullRequestTextArea();
    pullRequestTextArea.value += pullRequestDescriptionTemplate;
}

function getPullRequestTextArea() {
    
    if (isExistingPullRequestUrl) {
        const headerDataChannelValue = document.getElementById('partial-discussion-header').getAttribute('data-channel');
        const [_, pullRequestId] = headerDataChannelValue.split(':');
        return document.getElementById(`issue-${pullRequestId}-body`);
        
    }

    if (isComparePullRequestUrl) {
        return document.getElementById('pull_request_body');
    }

}

document.getElementById('description-template').addEventListener('click', function (event) {
    event.preventDefault(); 
    appendTemplateToPullRequestDescription();
    event.stopPropagation();
})
