import Component from '../core/Component.js'
import TemplateEngine from '../core/TemplateEngine.js'

export default class HomePage extends Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      title: 'Home Page - Welcome!',
      description: 'This is the home page of the demo app.'
    };
  }

  render() {
    const template = `
      <div class="page__home">
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
