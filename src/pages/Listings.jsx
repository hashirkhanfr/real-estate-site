import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import PropertyDetailsModal from '../components/admin/PropertyDetailsModal';
import '../styles/listings.css';
import '../styles/admin-dashboard.css';

const Listings = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "properties"));
                const propertyList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProperties(propertyList);
            } catch (error) {
                console.error("Error fetching properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const openDetails = (property) => {
        setSelectedProperty(property);
    };

    const closeDetails = () => {
        setSelectedProperty(null);
    };

    return (
        <section className="listings-section section">
            <div className="container">
                <h1 className="page-title">Housing Projects</h1>

                {loading ? (
                    <p style={{ textAlign: 'center', color: '#fff' }}>Loading projects...</p>
                ) : (
                    <div className="listings-grid">
                        {properties.map((property) => (
                            <div key={property.id} className="listing-card" onClick={() => openDetails(property)} style={{ cursor: 'pointer' }}>
                                <div className="card-image">
                                    {property.imageUrl ? (
                                        <img src={property.imageUrl} alt={property.name} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc' }}>
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="card-details">
                                    <h3>{property.name}</h3>
                                    <p className="location">Location: {property.location}</p>
                                    <p className="description">
                                        {property.description?.length > 100
                                            ? `${property.description.substring(0, 100)}...`
                                            : property.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {properties.length === 0 && !loading && (
                    <p style={{ textAlign: 'center', color: '#fff' }}>No properties listed yet.</p>
                )}
            </div>

            {/* Reuse the Admin Modal */}
            {selectedProperty && (
                <PropertyDetailsModal
                    property={selectedProperty}
                    onClose={closeDetails}
                />
            )}
        </section>
    );
};

export default Listings;
