using QuestionAndAnswer.Models.Entities;
using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace QuestionAndAnswer.Models
{
    public class QAContext : DataContext
    {
        public QAContext()
            : base("DefaultConnection")
        {
        }

        public DbSet<Question> Questions { get; set; }

        public DbSet<Answer> Answers { get; set; }
    }
}