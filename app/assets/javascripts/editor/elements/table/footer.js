//= require ./table

Elements.Table.Footer = function(properties) {
    Elements.Element.call(this);

    this.properties = properties;
};

Elements.Table.Footer.prototype = Object.create(Elements.Element.prototype);
Elements.Table.Footer.prototype.constructor = Elements.Table.Footer;

Elements.Table.Footer.TYPE = 'footer';

Elements.Table.Footer.PROPERTIES = [
    { type: Elements.Properties.Border, target: function(element) { return element.html; } },
];

Elements.Table.Footer.map_from_code = function(parent_element, element_type, properties) {
    if(parent_element.constructor == Elements.Table && element_type == Elements.Table.Footer.TYPE) {
        return new Elements.Table.Footer(properties);
    }
    else {
        return null;
    }
};

Elements.Table.Footer.prototype.render = function() {
    if(this.html == null) {
        this.html = Util.clone_template('#element_table_footer_template');
        this.render_child_elements('tfoot');
        this.html = this.html.find('tfoot');

        this.apply_properties();
        this.render_child_elements();

    }

    return this.html;
};

