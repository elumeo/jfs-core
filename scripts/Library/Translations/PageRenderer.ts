import File from "../Filesystem/File";
import {resolve} from "path";

export interface IPageRendererProps {
    pageDirectoryPath: string;
}

class PageRenderer {

    private htmlFile: File;
    private cssFile: File;
    private javaScriptFile: File;
    
    constructor(props: IPageRendererProps) {
        this.htmlFile = new File({
            path: resolve(
                props.pageDirectoryPath,
                'index.html'
            )
        });
        this.cssFile = new File({
            path: resolve(
                props.pageDirectoryPath,
                'style.css'
            )
        });
        this.javaScriptFile = new File({
            path: resolve(
                props.pageDirectoryPath,
                'script.js'
            )
        });
    }

    public renderPreview = ({
        scriptInjection,
        previewReady
    }: { scriptInjection?: string, previewReady: (preview: string) => void }) => {
        this.htmlFile.read({
            dataReady: html => this.cssFile.read({
                dataReady: css => this.javaScriptFile.read({
                    dataReady: script => previewReady(
                        (html as string)
                            .replace('STYLE', (css as string))
                            .replace(
                                'SCRIPT',
                                `<script type="application/javascript">${scriptInjection || ''}${(script as string)}</script>`
                            )
                    )
                })
            })
        });
    };

}

export default PageRenderer;