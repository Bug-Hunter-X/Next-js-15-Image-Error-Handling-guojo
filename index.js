```javascript
// pages/about.js
import Image from 'next/image';

function About() {
  const [error, setError] = React.useState(null);

  const handleError = () => {
    setError(true);
  };

  return (
    <div>
      <h1>About Page</h1>
      {error ? (
        <p>Image failed to load.</p>
      ) : (
        <Image
          src='/broken-image.jpg'
          alt='Broken Image'
          width={300}
          height={200}
          onError={handleError}
          placeholder='blur'
          blurDataURL='/placeholder.jpg' //Use a blur placeholder
        />
      )}
    </div>
  );
}

export default About;
```