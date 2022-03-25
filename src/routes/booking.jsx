export default function Booking() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Create a Booking</h2>
        <div class="PageContent-module--container--31pft">
        <p>The spaces available:</p>
        <ul>
        <li><a href="https://www.hackney.gov.uk/hackney-marshes">Hackney Marshes</a></li>
        <li><a href="https://www.hackney.gov.uk/mabley-green">Mabley Green</a>&nbsp;– 3G pitch</li>
        <li><a href="https://www.hackney.gov.uk/haggerston-park">Haggerston Park</a></li>
        </ul>
        </div>
        <div class="govuk-form-group lbh-form-group">
          <label class="govuk-label lbh-label" for="select-1">
              Select a pitch
            </label>
            <select class="govuk-select lbh-select" id="select-1" name="select-1">
              <option value="1">Hackney Marshes</option>
              <option value="2">Mabley Green - 3G Pitch</option>
              <option value="3">Haggerston Park</option>
            </select>
        </div>
        <button class="govuk-button lbh-button" data-module="govuk-button">
  Save and continue
</button>
      </main>
    );
  }