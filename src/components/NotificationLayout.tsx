import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

type NotificationLayoutProps = {
  show: boolean;
};
const NotificationLayout: React.FC<PropsWithChildren<NotificationLayoutProps>> = ({
  children,
  show,
}) => {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-x-0 bottom-0 flex px-4 py-6 sm:p-6"
    >
      <div className="flex w-full flex-col items-center">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition show={show}>
          <div className="bg-selected-card pointer-events-auto overflow-hidden rounded-lg border-2 border-white transition data-[closed]:opacity-0 data-[enter]:transform data-[enter]:duration-300 data-[enter]:ease-out data-[closed]:data-[enter]:translate-y-10 data-[leave]:transform data-[leave]:duration-300 data-[leave]:ease-in data-[closed]:data-[leave]:translate-y-10">
            {children}
          </div>
        </Transition>
                {/* The Transition and the below code does the same */}
        {/* <div
          className={classNames(
            show ? 'ease-out' : 'translate-y-10 opacity-0 ease-in',
            'bg-selected-card pointer-events-auto transform overflow-hidden rounded-lg border-2 border-white transition duration-300',
          )}
        >
          {children}
        </div> */}
      </div>
    </div>
  );
};
export default NotificationLayout;
