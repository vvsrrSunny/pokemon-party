'use client';
import { ReactElement, useEffect, useState } from 'react';
import NotificationLayout from './NotificationLayout';

interface PartyNotificationProps {
  selectedList: string[];
}

export default function PartyNotification({ selectedList }: PartyNotificationProps): ReactElement {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (selectedList.length !== 0) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 1000); // Resets to false after 1 second
      return () => clearTimeout(timer); // Clear timeout on re-render
    } else {
      setShow(false);
    }
  }, [selectedList]);

  return (
    <>
      <NotificationLayout show={show}>
        <div className="px-4 py-2.5">
          <div className="flex items-center">
            <div className="flex justify-center">
              <p className="text-sm font-medium text-white">Party: {selectedList.length} of 6</p>
            </div>
          </div>
        </div>
      </NotificationLayout>
    </>
  );
}
