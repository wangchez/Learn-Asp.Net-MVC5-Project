using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using QuestionAndAnswer.Models;
using QuestionAndAnswer.Models.Entities;
using Repository.Pattern.Infrastructure;

namespace QuestionAndAnswer.Tests.Physicals
{
    [TestClass]
    public class CreateQuestionTest
    {
        private QAContext _context;

        [TestInitialize]
        public void Initialize()
        {
            _context = new QAContext();
        }

        [TestMethod]
        public void Test成功建立問題()
        {
            Question question = new Question();
            question.QuestionContent = "Test 123";
            question.ObjectState = ObjectState.Added;
            _context.Questions.Add(question);
            int result = _context.SaveChanges();

            Assert.IsTrue(result == 1);
        }

        [TestMethod]
        public void Test成功建立問題解答()
        {
            Answer answer = new Answer();
            answer.AnswerContent = "Test 123";
            answer.ObjectState = ObjectState.Added;
            _context.Answers.Add(answer);
            int result = _context.SaveChanges();

            Assert.IsTrue(result == 1);
        }
    }
}
