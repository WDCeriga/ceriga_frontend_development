import { IOrderState } from "@interfaces/bll/order.interface";
import { IParamPreviewOrder } from "@interfaces/order/paramsPreview.interface";

export const mapOrderStateToParams = async (state: IOrderState) => {
  const currentId = state.draftId ?? state._id;
  let links = {
    design: '',
    neck: '',
    label: '',
    package: ''
  };

  try {
    const response = await fetch('https://storage.googleapis.com/storage/v1/b/ceriga-storage-bucket/o/');
    const data = await response.json();

    if (Array.isArray(data.items)) {
      const names = data.items.map((item) => item.name);

      console.log("Names:", names);

      // Helper function to find a valid file link
      const findValidLink = (folder: string) => {
        const folderContent = names.filter(name => name.startsWith(`${currentId}/${folder}/`) && name !== `${currentId}/${folder}/`);
        return folderContent.length > 0 ? folderContent[0] : '';
      };

      links.design = findValidLink('designUploads');
      links.neck = findValidLink('neckUploads');
      links.label = findValidLink('labelUploads');
      links.package = findValidLink('packageUploads');

      console.log("Links:", links);

      // Update the links with the full URL
      Object.keys(links).forEach(key => {
        if (links[key]) {
          links[key] = `https://storage.googleapis.com/ceriga-storage-bucket/${links[key]}`;
        }
      });
    } else {
      console.error('No items found or invalid items structure in the response.');
    }

    console.log("Updated Links:", links);

  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const data: IParamPreviewOrder[] = [
    {
      title: "Fabrics",
      paramsType: "list",
      subparameters: [
        { title: "Materials", value: state.material.name || "" },
        { title: "GSM", value: state.material.value || "" },
      ],
    },
    {
      title: "Colour",
      paramsType: "list",
      subparameters: [
        { title: "Hex Code", value: state.color.hex || "" },
        { title: "Color Description", value: state.color.description || "" },
        { title: "Dye style", value: state.dyeStyle || "" },
        { title: "Extra details", value: state.stitching.description || "" },
      ],
    },
    {
      title: "Neck label",
      paramsType: "list",
      subparameters: [
        {
          title: "Design",
          isLink: true,
          link: links.neck,
        },
        {
          title: "Design Options",
          value: state.neck.additional.material || "",
        },
        { title: "Neck Label Description", value: state.neckDescription || "" },
        { title: "Material", value: state.neck.additional.material || "" },
        { title: "Colour", value: state.neck.additional.color || "" },
      ],
    },
    {
      title: "Care label",
      paramsType: "list",
      subparameters: [
        {
          title: "",
          isLink: true,
          titleStyle: "bold",
          link: links.label,
        },
      ],
    },
    {
      title: "Design",
      paramsType: "list",
      subparameters: [
        {
          title: "Design",
          isLink: true,
          titleStyle: "bold",
          link: links.design,
        },
        { title: "Extra Details", value: state.stitching.description || "" },
        { title: "Stitching", value: state.stitching.type || "" },
        { title: "Custom Stitching", value: "" },
        { title: "Fading", value: state.fading.type || "" },
        { title: "Custom Fading", value: "" },
      ],
    },
    {
      title: "Packaging",
      paramsType: "list",
      subparameters: [
        {
          title: "Packaging Type",
          value: state.package.isPackage ? "Packaged" : "Unpackage",
        },
        { title: "Extra Details", value: state.package.description || "" },
        {
          title: "Images",
          isLink: true,
          titleStyle: "bold",
          link: links.package,
        },
      ],
    },
    {
      title: "Quantity",
      paramsType: "table",
      subparameters: state.quantity.list.map((item) => ({
        title: item.name,
        value: item.value.toString(),
      })),
    },
  ];
  return data;
};

