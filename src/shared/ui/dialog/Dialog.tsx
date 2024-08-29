// 'use client';
// import React, { createContext, useContext, useState } from 'react';

// // Create context
// type TDialogContext = {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };
// const DialogContext = createContext<TDialogContext | null>(null);

// type TDialogProps = {
//   children: React.ReactNode;
//   isOpen?: boolean;
// };

// // Main Dialog component
// export const Dialog = ({ children, isOpen: initialIsOpen = false }: TDialogProps) => {
//   const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

//   return <DialogContext.Provider value={{ isOpen, setIsOpen }}>{children}</DialogContext.Provider>;
// };

// // Trigger component
// Dialog.Trigger = ({ children }: { children: React.ReactElement }) => {
//   const context = useContext(DialogContext);
//   return React.cloneElement(children, {
//     onClick: () => context?.setIsOpen(true)
//   });
// };

// // Content component
// Dialog.Content = ({ children }: { children: React.ReactNode }) => {
//   const context = useContext(DialogContext);

//   if (!context?.isOpen) return null;

//   return (
//     <div className='dialog-overlay'>
//       <div className='dialog-content'>
//         {children}
//         <button className='close-button' onClick={() => context?.setIsOpen(false)}>
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// // Header component
// Dialog.Header = ({ children }: { children: React.ReactNode }) => (
//   <div className='dialog-header'>{children}</div>
// );

// // Body component
// Dialog.Body = ({ children }: { children: React.ReactNode }) => (
//   <div className='dialog-body'>{children}</div>
// );

// // Footer component
// Dialog.Footer = ({ children }: { children: React.ReactNode }) => (
//   <div className='dialog-footer'>{children}</div>
// );
