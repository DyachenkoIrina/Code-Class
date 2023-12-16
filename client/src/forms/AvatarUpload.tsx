import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function AvatarUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('avatar', selectedFile);

//       // Adjust the URL to match your backend endpoint
//       const response = await axios.post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('File uploaded successfully:', response.data);
//       // Handle any additional logic after successful upload
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       // Handle error logic
//     }
//   };

  return (
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
    </Form.Group>
  );
}



