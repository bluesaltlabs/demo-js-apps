import Component from '../core/Component.js'
import TemplateEngine from '../core/TemplateEngine.js'

export default class AboutPage extends Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      title: 'About Page',
      description: 'Learn more about this application'
    };
  }

  render() {
    const template = `
      <div class="page__about">
      <h1>{{title}}</h1>
      <small>{{description}}</small>
      <hr />
      </div>
    `;

    return TemplateEngine.render(template, {
      title: this.state.title,
      description: this.state.description
    });
  }

  //
}
