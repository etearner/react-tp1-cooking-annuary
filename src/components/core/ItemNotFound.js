const ItemNotFound = ({ displayMessage = null }) => {
    return (
        <div className="not-found">
            <h3>
                {displayMessage ? displayMessage : "Aucun résultat n'a été trouvé pour votre recherche."}
            </h3>
            <img src="assets/img/not-found.png" alt="Not found" />
        </div>
    );
};

export default ItemNotFound;