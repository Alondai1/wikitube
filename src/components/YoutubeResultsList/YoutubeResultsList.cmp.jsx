import React from "react";
import YoutubeResultPreview from '../YoutubeResultPreview/YoutubeResultPreview.cmp'
import "./YoutubeResultsList.style.scss";

const YoutubeResultsList = ({ results, setCurrentVideo, theme }) => {
  return (
    <div className="youtube-results-list">
      <ul>
        {results.map((result, idx) => {
          return (
            <YoutubeResultPreview
              theme={theme}
              key={idx}
              result={result}
              setCurrentVideo={setCurrentVideo} />
          );
        })}
      </ul>
    </div>
  );
}

export default YoutubeResultsList;
