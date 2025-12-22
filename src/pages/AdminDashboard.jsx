import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../config/firebase';
import SEO from '../components/SEO';
import AdminPropertyForm from '../components/admin/AdminPropertyForm';
import AdminPropertyList from '../components/admin/AdminPropertyList';
import PropertyDetailsModal from '../components/admin/PropertyDetailsModal';
import '../styles/admin-dashboard.css';

const AdminDashboard = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProperty, setEditingProperty] = useState(null);
    // Mobile tab state: 'form' or 'list'
    const [mobileTab, setMobileTab] = useState('list');
    const navigate = useNavigate();

    const propertiesCollection = collection(db, "properties");

    const fetchProperties = async () => {
        try {
            const data = await getDocs(propertiesCollection);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setProperties(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const handleAddProperty = async (data) => {
        try {
            await addDoc(propertiesCollection, data);
            fetchProperties();
            // Optional: switch to list view after adding on mobile
            if (window.innerWidth <= 768) {
                setMobileTab('list');
            }
        } catch (error) {
            console.error("Error adding property: ", error);
        }
    };

    const handleUpdateProperty = async (id, data) => {
        const propertyDoc = doc(db, "properties", id);
        try {
            await updateDoc(propertyDoc, data);
            fetchProperties();
            setEditingProperty(null); // Close edit mode
            // Optional: switch to list view after updating on mobile
            if (window.innerWidth <= 768) {
                setMobileTab('list');
            }
        } catch (error) {
            console.error("Error updating property: ", error);
        }

    };

    const handleDeleteProperty = async (id) => {
        const propertyDoc = doc(db, "properties", id);
        try {
            await deleteDoc(propertyDoc);
            fetchProperties();
        } catch (error) {
            console.error("Error deleting property: ", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin-login');
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    const openDetails = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const closeDetails = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const startEditing = (property) => {
        setEditingProperty(property);
        // On mobile, switch to form view when editing
        if (window.innerWidth <= 768) {
            setMobileTab('form');
        }
    }

    const cancelEditing = () => {
        setEditingProperty(null);
    }

    return (
        <div className="admin-dashboard-container">
            <SEO title="Dashboard - Al Rafay Associates" />
            {/* Left Side: Form */}
            <div
                className={`admin-sidebar ${mobileTab === 'form' ? 'mobile-expanded' : 'mobile-collapsed'}`}
                onClick={() => setMobileTab('form')}
            >
                <h2>
                    {editingProperty ? 'Edit Property' : 'Add New Property'}
                </h2>
                <div className="admin-form-wrapper">
                    <AdminPropertyForm
                        onSubmit={editingProperty ? (data) => handleUpdateProperty(editingProperty.id, data) : handleAddProperty}
                        initialData={editingProperty}
                        onCancel={editingProperty ? cancelEditing : undefined}
                    />
                </div>
            </div>

            {/* Right Side: List */}
            <div
                className={`admin-main-content ${mobileTab === 'list' ? 'mobile-expanded' : 'mobile-collapsed'}`}
                onClick={() => setMobileTab('list')}
            >
                <div className="dashboard-header">
                    <h2>Properties List</h2>
                    <button className="logout-btn" onClick={(e) => {
                        e.stopPropagation(); // Prevent ensuring tab switch if clicking logout
                        handleLogout();
                    }}>
                        Logout
                    </button>
                </div>
                <div className="admin-list-wrapper">
                    <AdminPropertyList
                        properties={properties}
                        onViewDetails={openDetails}
                        onEdit={startEditing}
                        onDelete={handleDeleteProperty}
                    />
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedProperty && (
                <PropertyDetailsModal
                    property={selectedProperty}
                    onClose={closeDetails}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
