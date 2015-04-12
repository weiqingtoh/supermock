var Editor = {};

Editor.init = function() {
    Editor.load_project();
    Editor.init_buttons();
    Editor.init_page_list();
    Editor.init_selector();
    Editor.init_type_to_add();
    Editor.handle_key_events();
}

Editor.load_project = function() {
    var project_model = $('#data').data('project');
    this.project = new Elements.Project(project_model);
}

Editor.init_buttons = function() {
}

Editor.init_page_list = function() {
    PageList.init(this.project);
    PageList.select_first_item();
}

Editor.init_selector = function() {
    Selector.init();
}

Editor.init_type_to_add = function() {
    var element_list = [
        { labels: ['Button', 'Btn'], type: Elements.Button },
        { labels: ['Text'], type: null },
        { labels: ['Textfield', 'Input'], type: null },
        { labels: ['Textarea'], type: null },
        { labels: ['Checkbox', 'Chk'], type: null },
        { labels: ['Radiobutton', 'Rdo'], type: null },
        { labels: ['Box'], type: null },
        { labels: ['Table', 'Tbl'], type: null },
        { labels: ['Tabs'], type: null },
    ]

    TypeToAdd.init(element_list);
}

Editor.handle_key_events = function() {
    $('body').keyup(function(e) {
        switch(e.which) {
            case 32: // space
                TypeToAdd.show();
                break;
            case 27: // escape
                TypeToAdd.hide();
                break;
        }
    });
}

Editor.render_page = function() {
    Editor.canvas().children().detach();
    PageList.curr_page().render(Editor.canvas());
    Selector.unselect_all();
}

Editor.add_element = function(element) {
    PageList.curr_page().add_element(element);
    element.set_position(100, 100);
    Selector.select(element);
}

Editor.select_element = function(element) {
    if(element instanceof Elements.Page)
        Selector.unselect_all();
    else
        Selector.select(element);
}

Editor.canvas = function() {
    return $('#canvas');
}