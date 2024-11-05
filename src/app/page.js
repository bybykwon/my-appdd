import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="sec-g">
        <div className="inner">
          <h2 className="sec-g__tit">섹션 타이틀</h2>
          <p className="sec-g__desc">섹션 설명</p>
          <div className="sec-g__cont">섹션 컨텐츠</div>
          <a
            href="#"
            className="sec-g__more"
          >
            섹션 더보기
          </a>
        </div>
      </section>
    </>
  );
}
