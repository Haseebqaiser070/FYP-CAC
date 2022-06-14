import "./flipbook.css";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import useWindowWide from "./usewidth";
export default function DemoBook() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const widthScreen = useWindowWide();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const book = useRef();

  useEffect(() => {
    if (widthScreen < 600) {
      setWidth(400);
      setHeight(300);
    } else {
      setWidth(Math.ceil((0.9 * widthScreen) / 2));
      setHeight(Math.ceil((0.6 * widthScreen) / 2));
    }
  }, [widthScreen]);

  useEffect(() => {
    setTimeout(() => {
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);

  const updatePage = ({ data }) => setPage(data + 2);

  return (
    <div className="flex" style={{ padding: "50px 0" }}>
      <span
        onClick={() => book.current.pageFlip().flipNext()}
        className={"next button"}
      >
        <i className="fas fa-chevron-right"></i>
      </span>
      <HTMLFlipBook
        onFlip={updatePage}
        width={width}
        height={height}
        ref={book}
      >
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <h1>hskhsdkjsdkjdskjdkjs</h1>
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <h1>Balti</h1>
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <h1>hskhsdkjsdkjdskjdkjs</h1>
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
        <div className="page">
          <img src="https://picsum.photos/510/300?random" alt="person" />
        </div>
      </HTMLFlipBook>
      <span
        onClick={() => book.current.pageFlip().flipPrev()}
        className={"previous button"}
      >
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="info-page">
        {page} - {total}
      </span>
    </div>
  );
}
