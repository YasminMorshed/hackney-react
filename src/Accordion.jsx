import { useEffect, useRef } from "react"
import { Accordion } from "lbh-frontend"
import { Link } from "react-router-dom";
import ball from './ball.jpg'

const MyAccordion = () => {
  const ref = useRef(null)

  useEffect(() => {
    new Accordion(ref.current).init()
  }, [])

  return (
    <>
    <h1>Football Pitch Booking System</h1>
    <div className="ball">
      <img src={ball} alt="Ball" />
    </div>
    <h3>
            If you are unable to use the website, call 020 8986 7955, Monday – Friday, 9am-3.30pm or <a href="mailto:hackney.marshes@gll.org">hackney.marshes@gll.org</a> to book a football pitch.
    </h3>
    <div
      className="govuk-accordion lbh-accordion"
      id="default-example"
      data-attribute="value"
      ref={ref}
    >
      <div className="govuk-accordion__section ">
        <div className="govuk-accordion__section-header">
          <h5 className="govuk-accordion__section-heading">
            <span
              className="govuk-accordion__section-button"
              id="default-example-heading-1"
            >
              Book a Football Pitch
            </span>
          </h5>
        </div>
        <div
          id="default-example-content-1"
          className="govuk-accordion__section-content"
          aria-labelledby="default-example-heading-1"
        >
          <ul className="lbh-list lbh-list--bullet">
          <li><Link to="/booking">Click here to create a booking.</Link></li>
          </ul>
        </div>
      </div>
      <div className="govuk-accordion__section ">
        <div className="govuk-accordion__section-header">
          <h5 className="govuk-accordion__section-heading">
            <span
              className="govuk-accordion__section-button"
              id="default-example-heading-2"
            >
              Check or Amend your Booking
            </span>
          </h5>
        </div>
        <div
          id="default-example-content-2"
          className="govuk-accordion__section-content"
          aria-labelledby="default-example-heading-2"
        >
          <ul className="lbh-list lbh-list--bullet">
            <li><Link to="/amend">Click here to amend a booking.</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyAccordion