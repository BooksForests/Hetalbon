/* eslint-disable @typescript-eslint/no-explicit-any */
import ActivityChip from "../activityChip/ActivityChip";

interface ActivityDisplayProps {
  selectedActivities: any[];
}

const ActivityDisplay = ({ selectedActivities }: ActivityDisplayProps) => {
  if (selectedActivities.length === 0) return null;

  return (
    <>
      <div className="text-gray-500 text-md mt-4  mb-2 font-semibold">
        Activities
      </div>
      <div className="flex gap-2 mb-5 flex-wrap">
        {selectedActivities.map((activity: any, index: number) => (
          <ActivityChip key={index} text={activity} />
        ))}
      </div>
    </>
  );
};

export default ActivityDisplay;
