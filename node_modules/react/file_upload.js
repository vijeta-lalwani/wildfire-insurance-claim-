import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  state = {
    selectedFile: null
  };
  onFileChange = (event) => {
    this.SetState({
      selectedFile: event.target.files[0]
    });
  };

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);
    axios.post("api/uploadfile", formData);
  };
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}
          </p>
          <p>File Type: {this.state.selectedFile.type}
          </p>
          <p> Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    }
    else {
      return (
        <div>
        <br />
        <h4>Choose before pressing the Upload button</h4>
        </div>
      )
    };
  }
};

render() {
        return (
            <div>
                <h1>GeeksforGeeks</h1>
                <h3>File Upload using React!</h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>Upload!</button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default App;
