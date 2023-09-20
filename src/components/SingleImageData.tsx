import Link from 'next/link';
import Image from 'next/image';

interface ISingleImageDataProps {
  picture: Picture;
  onlyImage?: boolean;
}

const SingleImageData = ({ picture, onlyImage=false }: ISingleImageDataProps) => {
  return (
    <>
      {
        picture?.media_type === "image" ? (
          <Link href={picture?.url}>
            <Image 
              width={600}
              height={500}
              priority
              src={picture?.media_type==="image"? picture?.hdurl : picture?.thumbnail_url}
              alt={picture?.title}
              className={`${onlyImage ? 'w-96' : 'w-1/2'} h-auto mx-auto`}
            />
          </Link>
        ) : <iframe src={picture?.url} className="w-full h-96"></iframe>
      }
      {
        !onlyImage && (
          <>
            <p className="font-semibold text-right">{picture?.date}</p>
            <p className="text-justify">{picture?.explanation}</p>
          </>
        )
      }
    </>
  )
}

export default SingleImageData