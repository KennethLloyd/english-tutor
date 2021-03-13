import { useState, useRef } from 'react';
import { Button } from 'reactstrap';

const FileUploader = ({ setImage, thumbnail, setThumbnail }) => {
  const [imageName, setImageName] = useState(null);
  const inputFile = useRef(null);

  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={(e) => {
          setImageName(e.target.files[0].name);
          setThumbnail(URL.createObjectURL(e.target.files[0]));
          setImage(e.target.files[0]);
        }}
        style={{ display: 'none' }}
      />
      <Button
        outline
        color="primary"
        onClick={(e) => inputFile.current.click()}
        size="sm"
      >
        Upload
      </Button>
      {thumbnail ? (
        <>
          <img src={thumbnail} width="120" height="85" alt="thumbnail" />
          &nbsp;
        </>
      ) : (
        ''
      )}
      {imageName ? <span className="thumbnail-name">{imageName}</span> : ''}
    </>
  );
};

export default FileUploader;
