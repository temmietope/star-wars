import React, { FC, useState, useEffect } from "react";
import { Button, ResourceCard as Card } from "../theme/styles";
import { H3, H4, P } from "../theme/typography";
import { extractDetails } from "../utils/functions/extractDetails";

interface Resource {
  resource: { [key: string]: any };
}

const ResourceCard: FC<Resource> = ({ resource }) => {
  const [entity, setEntity] = useState(resource);
  const list = extractDetails(entity);
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState(list);
  const showMore = () => {
    console.log(resource);
    setActive(!active);
  };
  useEffect(() => {
    setEntity(resource);
    setDetails[extractDetails(entity)];
  }, details);
  const extractType = (str) => str.split("/").slice(4, 5)[0];
  const renderEntry = (key, val) => {
    if (Array.isArray(val)) {
      if (!val.length) {
        return null;
      }
      const see = (
        <li>
          <H4>{key}</H4>:
          <div className="array__list">
            {val.map((str, index) => {
              return (
                <div>
                  {/* {console.log(str.split("/").slice(4, 5)[0].slice(0,-1))} */}
                  {/* const subdomain = window.location.host.split(".").slice(0, -1)[0]; */}
                  <P key={index} transform="capitalize">
                    {`${extractType(str)} ${index + 1}`}{" "}
                  </P>
                </div>
              );
            })}
          </div>
        </li>
      );
      return see;
    }
    return (
      <li key={key}>
        <H4>{key}</H4>:<P>{val}</P>
      </li>
    );
  };

  return (
    <Card key={resource.name} showMore={active}>
      <H3>{resource.name || resource.title}</H3>
      <div className="card__details">
        {details.map(([k, v]) => {
          return renderEntry(k, v);
        })}
      </div>

      <Button onClick={() => showMore()}>
        {active ? "Show Less" : "View More!"}
      </Button>
    </Card>
  );
};

export default ResourceCard;
