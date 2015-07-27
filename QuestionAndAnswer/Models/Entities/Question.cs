using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace QuestionAndAnswer.Models.Entities
{
    public class Question : Entity
    {
        public Question()
        {
            this.Answers = new List<Answer>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid QuestionId { get; set; }

        public String QuestionContent { get; set; }

        public String QuestionCategory { get; set; }

        public int QuestionValue { get; set; }

        public bool QuestionLocked { get; set; }

        public List<Answer> Answers { get; set; }
    }
}