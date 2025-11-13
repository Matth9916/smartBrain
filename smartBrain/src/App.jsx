import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticulesBG from './components/ParticulesBG/ParticulesBG';
import './App.css';

const returnClarifaiRequestOptions = (imageUrl) => {
  const PAT = 'ea69154861324ed48ce9716267125674';
  const USER_ID = '2ircj6xkl7er';
  const APP_ID = 'FaceDetection01';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';
  //const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
            // "base64": IMAGE_BYTES_STRING
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
  this.setState({ imageUrl: this.state.input });

  const proxyUrl = "https://cors-anywhere-proxy-efmw.onrender.com/";
  const MODEL_ID = 'face-detection';
  const clarifaiUrl = `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`;

  console.log("click");
  
  fetch(proxyUrl + clarifaiUrl, returnClarifaiRequestOptions(this.state.input))
    .then(response => response.json())
    .then(result => {
      console.log(result);
      if (result.status && result.status.code !== 10000) {
        console.error('Clarifai API error:', result.status);
        return;
      }
      
      const regions = result.outputs[0].data.regions;

      regions.forEach(region => {
        const boundingBox = region.region_info.bounding_box;
        const topRow = boundingBox.top_row.toFixed(3);
        const leftCol = boundingBox.left_col.toFixed(3);
        const bottomRow = boundingBox.bottom_row.toFixed(3);
        const rightCol = boundingBox.right_col.toFixed(3);

        region.data.concepts.forEach(concept => {
          const name = concept.name;
          const value = concept.value.toFixed(4);
          console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
        });
      });
    })
    .catch(error => console.log('error', error));
};

  render() {
    return (
      <div className="min-h-screen relative">
        <ParticulesBG />
        <div className="relative z-10">
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          {/* <faceRecognition /> */}
        </div>
      </div>
    );
  }
}


export default App;
