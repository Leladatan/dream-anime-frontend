interface Props {
    src: string;
    clipClass: string;
}

const ImageClipBox = ({ src, clipClass }: Props) => (
    <div className={clipClass}>
        <img src={src} alt={"Image"} />
    </div>
);
export default ImageClipBox;