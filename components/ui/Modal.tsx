"use client";
import React, { useRef, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { VanishingText } from "./placeholders-and-vanish-input";

export function AnimatedModalDemo() {
  const [formVisible, setFormVisible] = useState(true);
  const [status, setStatus] = useState("");
  const [animating, setAnimating] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ugcgcs4",
        "template_l8jlp3n",
        form.current!,
        "1lBLfRt7iRJFFVpVJ"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current!.reset();
          setFormVisible(false);
          startVanishingEffect();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  const startVanishingEffect = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setStatus("");
      setTimeout(() => {
        setScrollToTop();
      }, 2000);
    }, 3000);
  };

  const setScrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            {formVisible ? (
              <>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Contact Me
                </h4>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md"
                    rows={5}
                  />
                  {status && <p className="text-center text-sm">{status}</p>}
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setFormVisible(false)}
                      className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img src="/memoji-call.PNG" alt="Memoji" className="w-40 h-40 rounded-full mb-20" />
                <VanishingText text="You'll hear from soon !" />
              </div>
            )}
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
