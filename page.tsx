import Image from 'next/image';

export default function Home() {
  return (
    <div className="Parent">
      <div className="child">
        <Image src="/profile.jpg" alt="Profile Image" width={200} height={200}/>
        <center>
          <h1>Hi! My Name is Marium Umair</h1>
          <h1>I am a Web Developer</h1>
        </center>
      </div>
    </div>
  );
}

