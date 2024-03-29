import React from 'react';
import {
  Row,
  Col,
  Container,
  Button,
  Pagination,
  Form,
  Toast,
  Modal,
  Accordion,
  Card,
  Alert,
  FormControl
} from 'react-bootstrap';

//sample for commit

// // import './App.css';
// //Bootstrap and jQuery libraries
// // import 'bootstrap/dist/css/bootstrap.min.css';
// //Image upload modules
// import { Upload, Modal } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
// import "antd/dist/antd.css";
// class Appss extends React.Component {
  
//   render(){
//     //Uploaded url
//     function getBase64(file) {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = error => reject(error);
//       });
//     }
    
//     class PicturesWall extends React.Component {
//       state = {
//         previewVisible: false,
//         previewImage: '',
//         previewTitle: '',
//         fileList: [
//           {
//             uid: '-1',
//             name: 'image.png',
//             status: 'done',
//             url: 'http://localhost:8888/routes/images/avatar.png',
//           }
//         ],
//       };
    
//       handleCancel = () => this.setState({ previewVisible: false });
//       //Image Preview
//       handlePreview = async file => {
//         if (!file.url && !file.preview) {
//           file.preview = await getBase64(file.originFileObj);
//         }
    
//         this.setState({
//           previewImage: file.url || file.preview,
//           previewVisible: true,
//           previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
//         });
//       };
    
//       handleChange = ({ fileList }) => this.setState({ fileList });
    
//       render() {
//         const { previewVisible, previewImage, fileList, previewTitle } = this.state;
//         const uploadButton = (
//           <div>
//             <PlusOutlined />
//             <div style={{ marginTop: 8 }}>Upload</div>
//           </div>
//         );
//         return (
//           <>
//             <Upload
//               action="http://localhost:8888/express/imageupload"
//               listType="picture-card"
//               fileList={fileList}
//               onPreview={this.handlePreview}
//               onChange={this.handleChange}
//             >
//               {fileList.length >= 8 ? null : uploadButton}
//             </Upload>
//             <Modal
//               visible={previewVisible}
//               title={previewTitle}
//               footer={null}
//               onCancel={this.handleCancel}
//             >
//               <img alt="example" style={{ width: '100%' }} src={previewImage} />
//             </Modal>
//           </>
//         );
//       }
//     }
//     return (
//       <div>
//           <h5>Upload pictures</h5>
//           <PicturesWall />
//           <img class="logo" src="http://localhost:8888/routes/images/a.png" alt="My_Logo"></img>
//         </div>
//   );
//     }
// }
// export default Appss;
/* Pagination Component 
-------------------------------------------------*/

const propTypes = {
  items: ['a','b','c']   
}

const defaultProps = {
  initialPage: 1
}

class Pagination1 extends React.Component {
  constructor(props) {
      super(props);
      this.state = { pager: {} };
  }

  componentWillMount() {
      // set page if items array isn't empty
      if (this.props.items && this.props.items.length) {
          this.setPage(this.props.initialPage);
      }
  }

  componentDidUpdate(prevProps, prevState) {
      // reset page if items array has changed
      if (this.props.items !== prevProps.items) {
          this.setPage(this.props.initialPage);
      }
  }

  setPage(page) {
      var items = this.props.items;
      var pager = this.state.pager;

      if (page < 1 || page > pager.totalPages) {
          return;
      }

      // get new pager object for specified page
      pager = this.getPager(items.length, page);

      // get new page of items from items array
      var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // update state
      this.setState({ pager: pager });

      // call change page function in parent component
      this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
      // default to first page
      currentPage = currentPage || 1;

      // default page size is 10
      pageSize = pageSize || 10;

      // calculate total pages
      var totalPages = Math.ceil(totalItems / pageSize);

      var startPage, endPage;
      if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      // calculate start and end item indexes
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }

  render() {
      var pager = this.state.pager;

      if (!pager.pages || pager.pages.length <= 1) {
          // don't display pager if there is only 1 page
          return null;
      }

      return (
        <>
          <Pagination>
                    <Pagination.First onClick={() => this.setPage(1)} />
                    <Pagination.Prev onClick={() => this.setPage(pager.currentPage - 1)} />
                      {pager.pages.map((page, index) =>
                        <Pagination.Item key={index} className={pager.currentPage === page ? 'active' : ''} onClick={() => this.setPage(page)}>{page}</Pagination.Item>
                      )}
                    <Pagination.Next onClick={() => this.setPage(pager.currentPage + 1)} />
                    <Pagination.Last onClick={() => this.setPage(pager.totalPages)} />
                </Pagination>
          </>
      );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;


/* App Component 
-------------------------------------------------*/

class Apps extends React.Component {
  constructor() {
      super();
      

      // an example array of items to be paged
      var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

      this.state = {
          exampleItems: exampleItems,
          pageOfItems: []
      };

      // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
      this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  }

  render() {
      return (
          <div>
              <div className="container">
                  <div className="text-center">
                      {this.state.pageOfItems.map(item =>
                          <div key={item.id}>{item.name}</div>
                      )}
                      <Pagination1 items={this.state.exampleItems} onChangePage={this.onChangePage} />
                  </div>
                  
              </div>
              <hr />
          </div>
      );
  }
}

export default Apps;