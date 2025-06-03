import "./Events.css";
import { Link, useParams } from "react-router-dom";
import events from "../../data/events-info.js";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";

export default function Event() {
  const { eventname } = useParams();

  let e = null;
  e = events.upcoming.find((e) => e.eventId === eventname);

  if (!e) {
    Object.values(events.past).forEach((yearEvents) => {
      const foundEvent = yearEvents.find((e) => e.eventId === eventname);
      if (foundEvent) {
        e = foundEvent;
        return;
      }
    });
  }

  const event = e;

  return (
    <div className="pt-20">
      <div className="event-div mx-auto max-w-6xl px-4">
        <div className="flex flex-row justify-between">
          <h2 className="font-semibold text-3xl mb-4">{event.name}</h2>
          <Link to="/events" className="cursor-pointer ">
            <FaArrowLeft size={20} className="text-black" />
          </Link>
        </div>
        <p>
          <span className="font-semibold text-lg">Date:</span> {event.date}{" "}
        </p>
        <p>
          <span className="font-semibold text-lg">Venue:</span> {event.venue}{" "}
        </p>
        <p>
          <span className="font-semibold text-lg">Timings:</span>{" "}
          {event.timings}{" "}
        </p>

        {event.pics && (
          <div className="my-6">
            {/* <h3 className="font-semibold text-2xl">Pics of the event</h3> */}
            <div className="gallery rounded-md m-4">
              <div className="event-slider rounded-md shadow-2xl w-full h-[30vh] max-w-3xl sm:h-96 mx-auto">
                <div className="slides border h-full  border-gray-600/20 rounded-md flex overflow-x-auto">
                  {event.pics.map((img, index) => (
                    <div key={index}>
                      <img
                        className="mx-auto aspect-video w-[80vw] lg:w-[40vw] rounded-md "
                        id={"slide-" + (index + 1)}
                        src={img}
                        alt={event.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {event.winners && (
          <div className="my-10">
            <h3 className="font-semibold text-2xl">Winners:</h3>
            <p
              className="text-base sm:text-lg overflow-x-scroll sm:overflow-x-hidden"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.winners }}
            ></p>
          </div>
        )}
        {event.outcome && (
          <div className="my-10">
            <h3 className="font-semibold text-2xl"> Outcome:</h3>
            <p
              className="text-base sm:text-lg "
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.outcome }}
            ></p>
          </div>
        )}
        {event.register && (
          <div className="my-10 w-full text-center">
            {event?.isGFormEmbeddable ? (
              <>
                <a href={event.register} target="_blank">
                  <h1 className="text-2xl mt-6 mb-4 text-blue-500 underline">
                    Register Now !!!
                  </h1>
                  <p className="text-sm italic ">fill out the gform</p>
                </a>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "150%",
                    height: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                  }}
                >
                  <iframe
                    src={event.register}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    allowfullscreen
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </>
            ) : (
              <>
                <a href={event.register} target="_blank">
                  <h1 className="text-2xl mt-6 mb-4 text-blue-500 underline">
                    Register Now !!!
                  </h1>
                  <p className="text-sm italic ">click here to register</p>
                </a>
              </>
            )}
          </div>
        )}
        {event.externalDownloads && (
          <div className="my-10">
            <h3 className="font-semibold text-2xl mb-6">Workshop Material:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(event.externalDownloads).map(
                ([title, downloadUrl], index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-lg mb-3">{title}</h4>
                    <button
                      onClick={async () => {
                        try {
                          const response = await fetch(downloadUrl);
                          const filename = downloadUrl.split("/").pop();
                          const blob = await response.blob();
                          const url = window.URL.createObjectURL(blob);
                          const a = document.createElement("a");
                          a.style.display = "none";
                          a.href = url;
                          a.download = filename;
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                          window.URL.revokeObjectURL(url);
                        } catch (err) {
                          console.error("Download failed:", err);
                          alert("Failed to download. Please try again.");
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-[#0f323f] text-white px-4 py-2 rounded-md"
                    >
                      <FaDownload size={16} />
                      Download Now
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
