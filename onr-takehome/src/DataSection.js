import React from 'react'
import './DataSection.css'

export default function DataSection () {


  return (
    <div>
      <div className="chart-display-options">
        <div>
          <p>Filters</p>
          <div className="select-filters">
            <div className="select-option">
              <div></div>
              <p>All CQA Results</p>
              <i>info</i>
            </div>
            <div className="select-option">
              <div className="unselected"></div>
              <p>CQAs with Closed Loop</p>
              <i>info</i>
            </div>
          </div>
        </div>
        <div>
          <div className="select-timeframe">
            <h4>QUALITY SCORE TREND</h4>
            <ul>
              <li><button>Day</button></li>
              <li><button>Week</button></li>
              <li><button>Month</button></li>
              <li><button>Quarter</button></li>
              <li><button>Half</button></li>
              <li><button>Year</button></li>
            </ul>
          </div>
        </div>
      </div>
      <section>
        <article>
          <h5>Quality Score</h5>
          <p>Chart</p>
          <p>Sample: 133</p>
        </article>
      </section>
    </div>
  )
}