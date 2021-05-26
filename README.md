# BFH_ML1_ChakkaMangaClassifier


![BFH Banner](https://trello-attachments.s3.amazonaws.com/542e9c6316504d5797afbfb9/542e9c6316504d5797afbfc1/39dee8d993841943b5723510ce663233/Frame_19.png)
# Chakka Manga Classifier
Chakka Manga classifier is a CNN binary image classifier to classify Mango and Jackfruit. Here the model will classify the input image as a Jackfruit or Mango. The Convolutional neural network (CNN) model is created using tensorflow and converted into tensorflowjs (JSON) model using tensorflowjs converter wizrd. The converted model is loaded into js file using tensorflowjs CDN and will predict the class of input image. The prediction result is rendered in the front end build using HTML and Bootstrap. 
## Team members
1. Shahanad Vs- ShahanadVs#0260 [https://github.com/shahanadvs]
2. Shahanas- shahanas#6688 [https://github.com/Shahanas-Shaha]
3. Anaina R- Anaina R#5614 [https://github.com/anaina1414]
## Team Id
BFH/recN2x00KlGzXdzdn/2021
## Link to product walkthrough
https://www.loom.com/share/3f677cb0bd914431b09ebb17bc0a2038
## How it Works ?
1. It accepts image as input by two ways (URL and upload)
2. Predict function will predict the image using the model created using tensorflow
3. Based on the result the name of the class is rendered on the front end using jquery.
## Libraries used
Tensorflow - 2.4.1
Numpy - 1.192
Tensorflow js - 3.6.0
Bootstrap - 4.6.0
Tensorflowjs converter
## How to configure
To run the project no need for additional configuration.
To work with the model
1. Download the whole files
2. Install the dependencies mentioned above (Use "conda install package-name" command)
3. Navigate to the downloaded directory
4. Create and activate tensorflow environment
5. To convert the SavedModel to tensorflowjs use the tensorflowjs converter wizard
## How to Run
1. Step 1: Open this link.. https://shahanadvs.github.io/chakkaMangaClassifier/
2. Step 2: Upload or paste the Url of desired image in the input option.
3. Step 3: After uploading the image click the predict button.
4. Step 4: And here you will get the prediction that whether the inputed image is chakka or manga
