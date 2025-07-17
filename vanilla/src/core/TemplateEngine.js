
// TemplateEngine class
export default class TemplateEngine {

  // Render the template
  static render(template, data = {}) {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] || '';
    });
  }

  //
}
