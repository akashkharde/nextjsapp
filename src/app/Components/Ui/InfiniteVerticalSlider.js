const InfiniteVerticalSlider = ({ tech, speed = 16000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }}>
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
               <span>{tech}</span>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span>{tech}</span>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span className="whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { InfiniteVerticalSlider };