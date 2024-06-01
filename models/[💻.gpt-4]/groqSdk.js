const groqSdk = async (
) => {
    const rawData = await fetch('characters.json'); // fetching ASCII characters
const data = await rawData.json(); // parsing raw data
return data;
}

const huggingFace = async (
) => {
    const transformedData = await fetch('transform.json'); // fetching transformation rules
const transformed = await transformedData.json(); // parsing transformation rules
return transformed;
}

const treeJs = async (
) => {
    const structure = await fetch('structure.json'); // fetching tree structure
const structuredData = await structure.json(); // parsing structure
return structuredData;
}

async function main(
) {
    const data = await groqSdk(); // getting raw data
const transformed = await huggingFace(); // getting transformation rules
const structured = await treeJs(); // getting structure
// merging all together
const result = data.map((el) => {
        const transformedEl = transformed.find(trans => trans.id === el.id);
        if (transformedEl) el.transformed = transformedEl.value;
        return el;
    });
    structured.data = result;

    return structured;
}

main().then(data => console.log(data));
