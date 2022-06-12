import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BusinessIcon from "@mui/icons-material/Business";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LanguageIcon from "@mui/icons-material/Language";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

//css
import "./about.css";

export const AboutOption = () => {
  let data = [
    {
      image: CurrencyExchangeIcon,
      name: "Nature of Business",
      details: "Exporter and Manufacturer",
      id: 1,
    },
    {
      image: BusinessIcon,
      name: "Year of Establishment",
      details: "1974",
      id: 2,
    },
    {
      image: AlignVerticalCenterIcon,
      name: "Legal Status of Firm",
      details: "Limited Company",
      id: 3,
    },
    {
      image: AutoGraphIcon,
      name: "Annual Turnover",
      details: "Rs. 50 - 100 Crore",
      id: 4,
    },
    {
      image: LanguageIcon,
      name: "Import Export Code (IEC)",
      details: "05040*****",
      id: 5,
    },
    {
      image: NoteAddIcon,
      name: "GST Number",
      details: "07AACCB1155C1ZB",
      id: 6,
    },
  ];
  return (
    <div key={"aboutoption"} id="details">
      {data.map((el) => {
        return (
          <div key={el.id}>
            <el.image className="icon" />
            <div>
              <h3>{el.name}</h3>
              <p>{el.details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
