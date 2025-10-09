export const loadInstall = () => {
  try {
    const data = localStorage.getItem("install");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
  }
};

export const updataInstall = (app) => {
  const installList = loadInstall();
  try {
    const isDuplicate = installList.some((p) => p.id === apps.id);
    if (isDuplicate) return "card already exist";
    const update = [...installList, app];
    localStorage.setItem("install", JSON.stringify(update));
  } catch (error) {
    console.log(error);
  }
};
