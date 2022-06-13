import "./aboutTable.css";

export const AboutTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3} className="border">
            <h1>Factsheet</h1>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td colSpan={3}>Basic Information</td>
        </tr>
        <tr>
          <td className="grey">Nature of Business</td>
          <td colSpan={2}>Export and Manufacturer</td>
        </tr>
        <tr>
          <td className="grey">Company CEO</td>
          <td colSpan={2}>ECharanjeet Singh</td>
        </tr>
        <tr>
          <td className="grey">Year of Establishment</td>
          <td colSpan={2}>1974</td>
        </tr>
        <tr>
          <td className="grey">Legal Status of Firm</td>
          <td colSpan={2}>Limited Company (Ltd./Pvt.Ltd.)</td>
        </tr>
        <tr>
          <td className="border grey">Annual Turnover</td>
          <td colSpan={2} className="border">
            Rs. 50 - 100 Crore
          </td>
        </tr>
        <tr>
          <td colSpan={3}>Statutory Profile</td>
        </tr>
        <tr>
          <td className="grey">Import Export Code (IEC)</td>
          <td colSpan={2}>05040*****</td>
        </tr>{" "}
        <tr>
          <td className="grey">GST No.</td>
          <td colSpan={2}>Limited Company (Ltd./Pvt.Ltd.)</td>
        </tr>{" "}
        <tr>
          <td className="grey">CIN No.</td>
          <td colSpan={2}>U24246DL2002PTC118034</td>
        </tr>
      </tbody>
    </table>
  );
};
