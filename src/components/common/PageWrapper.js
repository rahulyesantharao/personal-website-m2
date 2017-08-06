// import React from 'react';

// const PageWrapper = (Page) => class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {enter:false}
//   }
//   componentDidMount() {
//     setTimeout(() => this.setState({enter:true}), 300);
//   }
//   render() {
//     return (
//       <div className={this.state.enter?"page-wrapper page-1":"page-wrapper page-0"}>
//         <Page {...this.props}/>
//       </div>
//     );
//   }
//   componentWillUnmount() {
//     setTimeout(() => this.setState({enter:false}), 300);
//   }
// };

// export default PageWrapper;
