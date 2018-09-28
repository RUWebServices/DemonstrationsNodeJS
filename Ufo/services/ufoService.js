const ufos = require('../data/collection').ufos;

const ufoService = () => {
    const getAllUfos = () => ufos;

    const getUfoById = (id) => {
        const ufo = ufos.filter(u => u.id == id);
        if (ufo.length === 0) { return -1; }
        return ufo[0];
    };

    const createUfo = (ufo) => {
        let highestId = 0;
        ufos.forEach(u => { if (u.id > highestId) { highestId = u.id; }});
        ufo.id = highestId + 1;
        ufos.push(ufo);
    };

    const changeUfo = (id, ufo) => {
        if (getUfoById(id) === -1) { return -1; }
        const { name, description, type, dateOfDiscovery } = ufo;
        ufos.forEach((ufo, index, ufoArray) => {
            if (ufo.id == id) {
                const currentElement = ufoArray[index];

                // Change the properties
                currentElement.name = name;
                currentElement.description = description;
                currentElement.type = type;
                currentElement.dateOfDiscovery = dateOfDiscovery;
            }
        });
    };

    const deleteUfo = (id) => {
        const ufo = getUfoById(id);
        if (ufo === -1) { return -1; }
        const index = ufos.indexOf(ufo);

        ufos.splice(index, 1);
    };

    return {
        getAllUfos,
        getUfoById,
        createUfo,
        changeUfo,
        deleteUfo
    };
};

module.exports = ufoService();
