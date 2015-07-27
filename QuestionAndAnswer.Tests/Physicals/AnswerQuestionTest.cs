using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using QuestionAndAnswer.Models;
using System.Linq;
using QuestionAndAnswer.Models.Entities;
using Repository.Pattern.Infrastructure;

namespace QuestionAndAnswer.Tests.Physicals
{
    [TestClass]
    public class AnswerQuestionTest
    {
        private QAContext _context;

        [TestInitialize]
        public void Initialize()
        {
            _context = new QAContext();
        }

        [TestMethod]
        public void Test成功回答問題()
        {
            Question q = _context.Questions.First();
            Answer a = _context.Answers.First();

            q.Answers.Add(a);
            q.ObjectState = ObjectState.Modified;
            _context.Questions.Attach(q);
            int result = _context.SaveChanges();
            Assert.IsTrue(result == 1);
        }
    }
}
