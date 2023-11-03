"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { BiSolidCamera } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../hooks/use-modal";

enum StepCategories {
  SELECT_TEMPLATE = "SELECT_TEMPLATE",
  SELECT_SERVER_TYPE = "SELECT_SERVER_TYPE",
  INPUT_SERVER_DATA = "INPUT_SERVER_DATA",
}

interface Step {
  [key: string]: {
    prevStep?: StepCategories;
    nextStep?: StepCategories;
  };
}

interface StepButtonType {
  id: string;
  name: string;
  img: string;
  data: unknown;
}

const templateButton: StepButtonType[] = [
  {
    id: "gaming",
    name: "Gaming",
    img: "/assets/5d6dc6ffd6b519acc9a7.svg",
    data: "gaming",
  },
  {
    id: "school-club 1",
    name: "School Club",
    img: "/assets/5589e8e4717b76315f42.svg",
    data: "school-club",
  },
  {
    id: "school-club 2",
    name: "School Club",
    img: "/assets/5589e8e4717b76315f42.svg",
    data: "school-club",
  },
  {
    id: "school-club 3",
    name: "School Club",
    img: "/assets/5589e8e4717b76315f42.svg",
    data: "school-club",
  },
  {
    id: "school-club 4",
    name: "School Club",
    img: "/assets/5589e8e4717b76315f42.svg",
    data: "school-club",
  },
];

const serverType: StepButtonType[] = [
  {
    id: "for-club-or-community",
    name: "For a club or community",
    img: "/assets/7e7c6b45f2149335c996.svg",
    data: "club-or-community",
  },
  {
    id: "for-me-and-my-friends",
    name: "For me and my friends",
    img: "/assets/015eb861ca3bf2b0a536.svg",
    data: "me-and-my-friends",
  },
];

const steps: Step = {
  SELECT_TEMPLATE: {
    nextStep: StepCategories.SELECT_SERVER_TYPE,
  },
  SELECT_SERVER_TYPE: {
    prevStep: StepCategories.SELECT_TEMPLATE,
    nextStep: StepCategories.INPUT_SERVER_DATA,
  },
  INPUT_SERVER_DATA: {
    prevStep: StepCategories.SELECT_SERVER_TYPE,
  },
};

interface StepButtonProps {
  data: StepButtonType;
  onClick: (data: unknown) => void;
}

const StepButton = ({ data, onClick }: StepButtonProps) => {
  return (
    <button
      onClick={() => onClick(data.data)}
      className="w-full flex items-center 
        border-[1px] border-[#E1E2E4] rounded-lg px-4 py-2 mb-3 hover:bg-[#EBEAEC]"
    >
      <div className="w-[48px] h-[48px] mr-2">
        <Image width={48} height={48} src={data.img} alt="" />
      </div>
      <span>{data.name}</span>
      <MdArrowForwardIos className="ml-auto" size={21} />
    </button>
  );
};

export function CreateServerModal() {
  const [currentStep, setCurrentStep] = useState<StepCategories>(
    StepCategories.SELECT_TEMPLATE
  );
  const [uploadedIcon, setUploadedIcon] = useState<File>();
  const [previewIconUrl, setPreviewIconUrl] = useState<string>();
  const [serverName, setServerName] = useState<string>("");
  const { onClose } = useModal();

  const isShowStep = (step: StepCategories) => {
    return currentStep === step;
  };

  const stepNavigation = (step?: StepCategories) => {
    step && setCurrentStep(step);
  };

  const selectTemplate = (template: unknown) => {
    console.log(template);
    stepNavigation(steps[currentStep]["nextStep"]);
  };

  const handleUploadImage = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = ev.target.files as FileList;

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return;
    }

    setUploadedIcon(uploadedFiles[0]);
    setPreviewIconUrl(URL.createObjectURL(uploadedFiles[0]));
  };

  const onCreateServer = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    // postServer.mutate({
    //   serverName,
    //   serverIcon: uploadedIcon,
    // });
  };

  const onCloseModal = () => {
    onClose();
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/[0.85]"
        onClick={() => onCloseModal()}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.15 }}
        className="relative bg-white w-[440px] rounded"
      >
        <button
          className="absolute top-[16px] right-[16px]"
          onClick={() => onCloseModal()}
        >
          <AiOutlineClose size={16} />
        </button>
        <div
          className={`${
            isShowStep(StepCategories.SELECT_TEMPLATE) ? "block" : "hidden"
          } font-bold`}
        >
          <div className="text-center px-[16px] pt-[24px] select-none">
            <h1 className="text-[24px]">Create a server</h1>
            <div className="text-[16px] leading-[20px] font-normal my-2">
              Your server is where you and your friends hang out. Make yours and
              start talking.
            </div>
          </div>
          <div className="px-[16px] py-3 h-[330px] overflow-y-auto">
            <StepButton
              data={{
                id: "create-my-own",
                name: "Create my own",
                img: "/assets/4d526e1c61d719fd39a0.svg",
                data: "None",
              }}
              onClick={selectTemplate}
            />

            <div className="text-[12px] text-[#4d4f56] mt-4 mb-2">
              START FROM A TEMPLATE
            </div>
            {templateButton.map((data) => (
              <StepButton key={data.id} data={data} onClick={selectTemplate} />
            ))}
          </div>
          <div className="w-full bg-[#F3F3F4] text-center p-[16px] ">
            <div>Have an invite already?</div>
            <button className="bg-[#6D6E78] w-full text-white text-[14px] font-medium rounded py-2 mt-2">
              Join a Server
            </button>
          </div>
        </div>
        <div
          className={`${
            isShowStep(StepCategories.SELECT_SERVER_TYPE) ? "block" : "hidden"
          } font-bold`}
        >
          <div className="text-center px-[16px] pt-[24px] select-none">
            <h1 className="text-[24px]">Tell us more about your server</h1>
            <div className="text-[16px] leading-[20px] font-normal my-2">
              In order to help you with your setup, is your new server for just
              a few friends or a larger community?
            </div>
          </div>
          <div className="px-[16px] py-3">
            {serverType.map((data) => (
              <StepButton key={data.id} data={data} onClick={selectTemplate} />
            ))}

            <div className="text-center text-[12px] text-[#5c5e66] font-medium cursor-default">
              Not sure? You can
              <span className="mx-1 text-[#006be6] cursor-pointer">
                skip this question
              </span>
              for now.
            </div>
          </div>
          <div className="w-full bg-[#F3F3F4] p-[16px] ">
            <button
              className="text-[14px] font-medium"
              onClick={() => stepNavigation(steps[currentStep]["prevStep"])}
            >
              Back
            </button>
          </div>
        </div>
        <div
          className={`${
            isShowStep(StepCategories.INPUT_SERVER_DATA) ? "block" : "hidden"
          } font-bold`}
        >
          <div className="text-center px-[16px] pt-[24px] select-none">
            <h1 className="text-[24px]">Customize your server</h1>
            <div className="text-[16px] leading-[20px] font-normal my-2">
              Give your new server a personality with a name and an icon. You
              can always change it later.
            </div>
          </div>
          <div className="px-[16px] mb-[16px]">
            <div className="flex justify-center">
              <label
                htmlFor="server-icon"
                className={`h-[80px] w-[80px] my-[16px] cursor-pointer relative
                flex items-center justify-center 
                rounded-full
                ${
                  previewIconUrl
                    ? "overflow-hidden"
                    : "border-[1px] border-dashed border-black"
                }`}
              >
                {previewIconUrl ? (
                  <Image fill={true} src={previewIconUrl} alt="" />
                ) : (
                  <>
                    <BiSolidCamera size={24} />
                    <FaCirclePlus
                      className="absolute top-0 right-0 bg-white text-[#5664F2]"
                      size={24}
                    />
                  </>
                )}
              </label>
              <input
                id="server-icon"
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleUploadImage}
              />
            </div>
            <form onSubmit={onCreateServer}>
              <label
                htmlFor=""
                className="text-[12px] text-[#4d4f56] leading-[12px] font-bold"
              >
                SERVER NAME
              </label>
              <div className="my-[8px]">
                <input
                  required
                  maxLength={100}
                  className="w-full bg-[#EBEAEA] px-4 py-2"
                  type="text"
                  value={serverName}
                  onChange={(ev) => setServerName(ev.target.value)}
                />
              </div>
            </form>
            <div className="text-[12px] text-[#5c5e66] font-normal select-none">
              By creating a server, you agree to Discord&quot;s
              <strong className="pl-1 text-[#006be6]">
                Community Guidelines
              </strong>
            </div>
          </div>
          <div className="flex justify-between w-full bg-[#F3F3F4] p-[16px]">
            <button
              className="text-[14px] font-medium"
              onClick={() => stepNavigation(steps[currentStep]["prevStep"])}
            >
              Back
            </button>
            <button
              className="text-[14px] text-white 
              bg-[#5664F3] disabled:bg-[#A4ABF5]
              px-[16px] py-[6px] rounded"
              disabled={!serverName}
              onClick={onCreateServer}
            >
              Create
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
