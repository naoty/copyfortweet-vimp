var INFO = xml`
<plugin name="copyfortweet-vimp.js"
        version="0.1"
        summary="Count selected texts"
        href="http://github.com/naoty/copyfortweet-vimp"
        xmlns="http://vimperator.org/namespaces/liberator">

        <author email="naoty.k@gmail.com">Naoto Kaneko</author>
        <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
        <project name="Vimperator" minVersion="3.3"/>
        <p>Read current page with zurukko</p>
        <item>
            <tags>:copyfortweet</tags>
            <spec>:copyfortweet</spec>
            <description>
                <p>Copy title and url for tweet.</p>
            </description>
        </item>
</plugin>`;

(function () {
    var names = ["copyfortweet"];
    var desc = "Copy title and url for tweet.";
    var command = function (args) {
        var title = content.document.title;
        var url = content.document.location.href;
        var text = title + " " + url;
        liberator.echo("Copy to clipboard: " + text);
        util.copyToClipboard(text);
    };

    commands.addUserCommand(names, desc, command);
})();
