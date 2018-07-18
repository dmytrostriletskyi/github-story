function Constants() {

    this.markdownToolbarIndex = 0;
    this.lastmMarkdownToolbarGroupIndex = 3;

    this.isExistingPullRequestUrl = window.location.href.includes('pull');
    this.isComparePullRequestUrl = window.location.href.includes('compare');

    this.pullRequestDescriptionTemplate = `### Jira references
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
`;

    this.pullRequestDescriptionDomElement = $(
        `<md-description 
            tabindex="-1" 
            class="toolbar-item tooltipped tooltipped-nw" 
            aria-label="Paste description template" 
            data-ga-click="arkdown Toolbar, click, description template" 
            hotkey="b" 
            role="button">
            <svg 
            id="description-template" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="12pt" height="14pt" viewBox="0 0 12 14" version="1.1"
            style="padding-top: 2px;>
                <g id="surface1" >
                <path style=" 
                stroke:none;fill-rule:nonzero;fill:rgb(34.509804%,37.647059%,41.176471%);fill-opacity:1;" 
                d="M 7.566406 0.265625 L 7.566406 3.652344 L 10.464844 3.652344 Z M 7.566406 0.265625 "/>
                <path style="
                stroke:none;fill-rule:nonzero;fill:rgb(34.509804%,37.647059%,41.176471%);fill-opacity:1;"
                d="M 7.175781 4.566406 C 6.957031 4.566406 6.78125 4.359375 6.78125 4.109375 L 6.78125 0 
                L 1.695312 0 C 1.480469 0 1.304688 0.203125 1.304688 0.457031 L 1.304688 13.542969 
                C 1.304688 13.796875 1.480469 14 1.695312 14 L 10.304688 14 C 10.519531 14 10.695312 
                13.796875 10.695312 13.542969 L 10.695312 4.566406 Z M 6.390625 11.261719 L 3.261719 
                11.261719 C 3.042969 11.261719 2.871094 11.054688 2.871094 10.804688 C 2.871094 
                10.550781 3.042969 10.347656 3.261719 10.347656 L 6.390625 10.347656 C 6.605469 
                10.347656 6.78125 10.550781 6.78125 10.804688 C 6.78125 11.054688 6.605469 
                11.261719 6.390625 11.261719 Z M 8.738281 9.433594 L 3.261719 9.433594 C 3.042969 
                9.433594 2.871094 9.230469 2.871094 8.976562 C 2.871094 8.726562 3.042969 8.523438 
                3.261719 8.523438 L 8.738281 8.523438 C 8.957031 8.523438 9.128906 8.726562 9.128906 
                8.976562 C 9.128906 9.230469 8.957031 9.433594 8.738281 9.433594 Z M 8.738281 7.609375 
                L 3.261719 7.609375 C 3.042969 7.609375 2.871094 7.402344 2.871094 7.152344 C 2.871094 
                6.898438 3.042969 6.695312 3.261719 6.695312 L 8.738281 6.695312 C 8.957031 6.695312 
                9.128906 6.898438 9.128906 7.152344 C 9.128906 7.402344 8.957031 7.609375 8.738281 
                7.609375 Z M 8.738281 7.609375 "/>
                </g>
            </svg>
        </md-bold>`
    );
}
