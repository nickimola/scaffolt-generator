module.exports = function(Handlebars) {
  Handlebars.registerHelper("capitaliseName", function(name, options) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  Handlebars.registerHelper("lowerName", function(name, options) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  });

  Handlebars.registerHelper("upperName", function(name, options) {
    return name.toUpperCase();
  });
};
