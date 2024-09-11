import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LesCommentaires = () => {
  const [comments, setComments] = useState([]);  // Pour stocker les commentaires
  const [newComment, setNewComment] = useState('');  // Pour le champ de texte du commentaire

  // Fonction pour récupérer les commentaires depuis l'API
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/comments');
      setComments(response.data);  // Met à jour les commentaires dans le state
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires:', error);
    }
  };

  // Utiliser useEffect pour charger les commentaires au chargement du composant
  useEffect(() => {
    fetchComments();
  }, []);

  // Fonction pour envoyer un nouveau commentaire
  const handleAddComment = async (e) => {
    e.preventDefault();  // Empêcher le rechargement de la page
    if (!newComment) return;  // Ne rien faire si le commentaire est vide

    try {
      // Envoie le commentaire à l'API Node.js
      await axios.post('http://localhost:3000/comments', { content: newComment });
      setNewComment('');  // Réinitialise le champ de texte
      fetchComments();  // Recharger les commentaires après l'ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    }
  };

  return (
    <div>
      <h2>Commentaires</h2>

      {/* Formulaire pour ajouter un commentaire */}
      <form onSubmit={handleAddComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajoutez un commentaire"
          rows="4"
          cols="50"
          required
          className='text-black'
        />
        <br />
        <button type="submit">Ajouter un commentaire</button>
      </form>

      {/* Liste des commentaires */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <p>{comment.content}</p>
              <small>{new Date(comment.createdAt).toLocaleString()}</small>
              <hr />
            </div>
          ))
        ) : (
          <p>Aucun commentaire pour l'instant</p>
        )}
      </div>
    </div>
  );
};

export default LesCommentaires
