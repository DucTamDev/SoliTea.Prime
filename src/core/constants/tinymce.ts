export const tinyMCEConfig: any = {
    // 1. Basic Editor Settings
    selector: '#editor',
    height: 620,
    menubar: 'file edit view insert format tools table help',
    toolbar_sticky: true,
    toolbar_mode: 'wrap',

    // 2. Plugins
    plugins: [
        'ai',
        'a11ychecker',
        'advcode',
        'advtemplate',
        'advlist',
        'advtable',
        'anchor',
        'autocorrect',
        'autosave',
        'editimage',
        'image',
        'link',
        'linkchecker',
        'lists',
        'markdown',
        'media',
        'mediaembed',
        'pageembed',
        'powerpaste',
        'searchreplace',
        'spellchecker',
        'table',
        'template',
        'tinymcespellchecker',
        'typography',
        'visualblocks',
        'wordcount',
        'codesample',
        'quickbars'
    ],

    // 3. Toolbar
    toolbar: [
        'undo redo |',
        'aidialog aishortcuts |',
        'styles fontsizeinput |',
        'bold italic underline strikethrough |',
        'align bullist numlist outdent indent |',
        'table link image media pageembed |',
        'spellcheckdialog a11ycheck code |',
        'inserttemplate |',
        'preview fullscreen help'
    ].join(' '),

    // 4. Style Formats
    style_formats: [
        { title: 'Heading 1', block: 'h1' },
        { title: 'Heading 2', block: 'h2' },
        { title: 'Heading 3', block: 'h3' },
        { title: 'Paragraph', block: 'p' },
        { title: 'Blockquote', block: 'blockquote' },
        { title: 'Fancy list', selector: 'ul', classes: 'fancy' }
    ],

    // 5. AI Shortcuts & Code Inline
    advcode_inline: true,
    ai_shortcuts: [
        {
            title: 'Summarize content',
            prompt: 'Provide the key points and concepts in this content in a succinct summary.'
        },
        {
            title: 'Improve writing',
            prompt: 'Rewrite this content with no spelling mistakes, proper grammar, and with more descriptive language, using best writing practices without losing the original meaning.'
        }
    ],

    // 6. Accessibility & Spellchecker
    spellchecker_ignore_list: ['CMS', 'devs'],
    a11ychecker_level: 'aaa',

    // 7. Templates
    advtemplate_templates: [
        {
            title: 'About us',
            content: `
<h2>About our company</h2>
<p><a href="https://tiny.cloud">XYZ Inc.</a> is a global leader in providing innovative solutions to businesses. We provide our clients with the latest technology, state-of-the-art equipment, and experienced professionals to help them stay ahead of their competition. Our comprehensive suite of services, from cloud computing and big data analytics to mobile and e-commerce solutions, ensures that all of our clients have the resources they need to stay competitive in an ever-changing business landscape. Our commitment to customer service and satisfaction is second to none, and we strive to be a reliable and trusted partner for our clients.</p>
      `
        }
    ],

    // 8. File Picker & Image Settings
    file_picker_callback: (cb, value, meta) => {
        if (meta.filetype === 'image') {
            const url = prompt('Enter image URL:', value || 'https://example.com/your-image.jpg');
            if (url) cb(url, { alt: 'Image description' });
        } else if (meta.filetype === 'media') {
            const url = prompt('Enter media URL:', value || 'https://www.youtube.com/embed/dQw4w9WgXcQ');
            if (url) cb(url, { poster: '', alt: 'Media description' });
        }
    },

    images_file_types: 'jpeg,jpg,png,gif',
    image_caption: true,

    // 9. Typography & Quickbars
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
    quickbars_insert_toolbar: 'quickimage quicktable | hr codesample',
    quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',

    // 10. Content Styling
    content_css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    content_style: `
        :root { --bs-primary-rgb: 62, 92, 210; --bs-border-radius: 0; --bs-border-radius-lg: 0; }
        html { font-size: 16px; }
        .tiny-logo { position: absolute; top: 2rem; left: 2rem; }
        h1 { font-size: 2.75rem; }
        h1,h2,h3 { margin-bottom: .5em; }
        ul.fancy li { margin-bottom: .5em; }
        ul.fancy li::marker { content: '✅  '; }
        .tiny-hero { background-image: url(images/sbc-cms-template-cover.png); background-size: cover; background-position: center center; }
        @media screen and (min-width: 768px) { .register-form { margin-bottom: -200px; } }
        form { pointer-events: none; }
        .tiny-editable { position: relative; }
        .tiny-editable:hover:not(:focus), .tiny-editable:focus { outline: 3px solid #b4d7ff; outline-offset: 4px; }
        .tiny-editable:empty::before, .tiny-editable:has(> br[data-mce-bogus]:first-child)::before { content: "Write here..."; position: absolute; top: 0; left: 0; color: #999; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; line-height: 1.6; color: #333; }
        a { color: #3498db; text-decoration: none; }
        a:hover { text-decoration: underline; }
        blockquote { border-left: 4px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px; color: #666; font-style: italic; }
        pre { background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto; font-family: 'SFMono-Regular', Consolas, Menlo, monospace; font-size: 0.9em; }
        code { background-color: #e0e0e0; padding: 2px 4px; border-radius: 3px; font-family: 'SFMono-Regular', Consolas, Menlo, monospace; font-size: 0.9em; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    `,

    // 11. Font Options
    fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 20pt 24pt 36pt 48pt',
    fontfamily_formats:
        'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino,serif; Impact=impact,chicago,sans-serif; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=times new roman,times'
};
