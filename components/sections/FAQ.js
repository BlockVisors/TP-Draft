import React from 'react';
//import BaseLayout from '../components/layouts/BaseLayout';


class FAQ extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: false,
      };
    }
  
    render() {
      const { open } = this.state;
      return (
    <div>
      <>
          <Button
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Who is Terry Richardsone?
          </Button>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </>
        <>
          <Button
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Who is Terry Richardsone?
          </Button>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </>
        </div>  
      );
    }
  }
  
  export default FAQ
  //render(<Example />);